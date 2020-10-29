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
    }


type alias Model =
    { gameState : GameState
    , randomValue : Int
    , questions : List Question
    }


type GameState
    = Ready
    | Playing
    | GameOver


init : () -> ( Model, Cmd Msg )
init _ =
    ( { gameState = Ready
      , randomValue = 0
      , questions =
            [ { index = 0, imgSrc = "salad.jpg" }
            , { index = 1, imgSrc = "coin.jpg" }
            , { index = 2, imgSrc = "gordian_knot.jpg" }
            , { index = 3, imgSrc = "anpan.jpg" }
            ]
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = KeyDown KeyType
    | SetRandomValue Int


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
                    case keyType of
                        Up ->
                            ( model, Random.generate SetRandomValue (Random.int 0 3) )

                        Down ->
                            ( model, Random.generate SetRandomValue (Random.int 0 3) )

                        Left ->
                            ( model, Random.generate SetRandomValue (Random.int 0 3) )

                        Right ->
                            ( model, Random.generate SetRandomValue (Random.int 0 3) )

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

        SetRandomValue randomVal ->
            ( { model | randomValue = randomVal }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    case model.gameState of
        Ready ->
            div []
                [ showReady model ]

        Playing ->
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
                        [ text "ここは操作ゾーンの想定" ]
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
    h1 [] [ text "playing page" ]


showGameOver : Model -> Html Msg
showGameOver model =
    h1 [] [ text "gameover page!" ]


getImgSrc : Model -> String
getImgSrc model =
    model.questions
        |> List.filter (\question -> question.index == model.randomValue)
        |> List.head
        |> Maybe.andThen (\q -> Just q.imgSrc)
        |> Maybe.withDefault "gordian_knot.jpg"



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
