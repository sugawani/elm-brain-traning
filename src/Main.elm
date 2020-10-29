module Main exposing (..)

import Browser
import Browser.Events
import Html exposing (..)
import Html.Attributes as Attr
import Json.Decode as D exposing (Decoder)
import Random


main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }



-- MODEL


type alias Question =
    { index : Int
    , imgSrc : String
    , arrow : String
    }


type alias Model =
    { gameState : GameState
    , questionIndex : Int
    , questions : List Question
    , correntAnswerCount : Int
    }


type GameState
    = Ready
    | Playing
    | GameOver


init : () -> ( Model, Cmd Msg )
init _ =
    ( { gameState = Ready
      , questionIndex = 0
      , questions =
            [ { index = 0, imgSrc = "salad.jpg", arrow = "up" }
            , { index = 1, imgSrc = "coin.jpg", arrow = "left" }
            , { index = 2, imgSrc = "gordian_knot.jpg", arrow = "down" }
            , { index = 3, imgSrc = "anpan.jpg", arrow = "right" }
            ]
      , correntAnswerCount = 0
      }
    , nextQuestion ()
    )



-- UPDATE


type Msg
    = KeyDown KeyType
    | SetQuestionIndex Int


type KeyType
    = Up
    | Down
    | Left
    | Right
    | Enter
    | Other


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        KeyDown keyType ->
            case model.gameState of
                Ready ->
                    case keyType of
                        Enter ->
                            ( { model | gameState = Playing }, Cmd.none )

                        _ ->
                            ( model, Cmd.none )

                Playing ->
                    if model.correntAnswerCount == 10 then
                        ( { model | gameState = GameOver }, Cmd.none )

                    else
                        case keyType of
                            Up ->
                                if correctAnswer "up" model then
                                    ( { model | correntAnswerCount = model.correntAnswerCount + 1 }, nextQuestion () )

                                else
                                    ( model, Cmd.none )

                            Down ->
                                if correctAnswer "down" model then
                                    ( { model | correntAnswerCount = model.correntAnswerCount + 1 }, nextQuestion () )

                                else
                                    ( model, Cmd.none )

                            Left ->
                                if correctAnswer "left" model then
                                    ( { model | correntAnswerCount = model.correntAnswerCount + 1 }, nextQuestion () )

                                else
                                    ( model, Cmd.none )

                            Right ->
                                if correctAnswer "right" model then
                                    ( { model | correntAnswerCount = model.correntAnswerCount + 1 }, nextQuestion () )

                                else
                                    ( model, Cmd.none )

                            Enter ->
                                ( { model | gameState = GameOver }, Cmd.none )

                            _ ->
                                ( model, Cmd.none )

                GameOver ->
                    case keyType of
                        Enter ->
                            ( { model | gameState = Ready }, Cmd.none )

                        _ ->
                            ( model, Cmd.none )

        SetQuestionIndex questionIndex ->
            if questionIndex /= model.questionIndex then
                ( { model | questionIndex = questionIndex }, Cmd.none )

            else
                ( model, nextQuestion () )


correctAnswer : String -> Model -> Bool
correctAnswer arrow model =
    let
        question =
            getCurrentQuestion model
    in
    question.arrow == arrow


getCurrentQuestion : Model -> Question
getCurrentQuestion model =
    model.questions
        |> List.filter (\question -> question.index == model.questionIndex)
        |> List.head
        |> Maybe.andThen (\q -> Just q)
        |> Maybe.withDefault { index = 0, imgSrc = "salad.jpg", arrow = "up" }


nextQuestion : () -> Cmd Msg
nextQuestion _ =
    Random.generate SetQuestionIndex (Random.int 0 3)



-- VIEW


view : Model -> Html Msg
view model =
    case model.gameState of
        Ready ->
            div []
                [ showReady model ]

        Playing ->
            showPlaying model

        GameOver ->
            div []
                [ showGameOver model ]


showReady : Model -> Html Msg
showReady model =
    div
        [ Attr.style "display" "flex"
        , Attr.style "flex-direction" "column"
        , Attr.style "justify-content" "center"
        , Attr.style "align-items" "center"
        ]
        [ img
            [ Attr.src "title.jpg"
            , Attr.style "text-align" "center"
            ]
            []
        , h1 [] [ text "画面に表示されている写真がなにか当てるゲーム" ]
        , h1 [] [ text "Chromeの人はサイトの設定から音楽を有効にすると音楽が流れるよ！" ]
        , h1 [] [ text "Enterキーを押してスタート！" ]
        ]


showPlaying : Model -> Html Msg
showPlaying model =
    div
        [ Attr.style "display" "flex"
        , Attr.style "height" "100%"
        ]
        [ div
            [ Attr.style "background-color" "skyblue"
            , Attr.style "width" "70%"
            , Attr.id "playView"
            ]
            [ div
                [ Attr.style "position" "absolute"
                , Attr.style "top" "100px"
                , Attr.style "left" "100px"
                , Attr.style "border" "1px solid"
                , Attr.style "width" "50%"
                , Attr.style "height" "40%"
                ]
                [ img
                    [ Attr.src <| getImgSrc model
                    , Attr.style "width" "100%"
                    , Attr.style "height" "100%"
                    , Attr.style "object-fit" "fill"
                    ]
                    []
                ]
            , div
                [ Attr.style "position" "absolute"
                , Attr.style "top" "800px"
                , Attr.style "left" "100px"
                , Attr.style "border" "1px solid"
                , Attr.style "width" "50%"
                , Attr.style "height" "20%"
                ]
                [ img
                    [ Attr.src "sousa.jpg"
                    , Attr.style "width" "100%"
                    , Attr.style "height" "100%"
                    , Attr.style "object-fit" "fill"
                    ]
                    []
                ]
            ]
        , div
            [ Attr.style "background-color" "green"
            , Attr.style "width" "30%"
            , Attr.id "playView"
            ]
            [ text "right view" ]
        , audio
            [ Attr.src "nando_loop.mp3"
            , Attr.type_ "audio/mp3"
            , Attr.autoplay True
            , Attr.loop True
            ]
            []
        ]


showGameOver : Model -> Html Msg
showGameOver model =
    h1 [] [ text "gameover page!" ]


getImgSrc : Model -> String
getImgSrc model =
    let
        queston =
            getCurrentQuestion model
    in
    queston.imgSrc



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Browser.Events.onKeyDown (D.map KeyDown keyDecoder)


keyDecoder : Decoder KeyType
keyDecoder =
    D.map toKey (D.field "key" D.string)


toKey : String -> KeyType
toKey key =
    case key of
        "ArrowUp" ->
            Up

        "ArrowDown" ->
            Down

        "ArrowLeft" ->
            Left

        "ArrowRight" ->
            Right

        "Enter" ->
            Enter

        _ ->
            Other
