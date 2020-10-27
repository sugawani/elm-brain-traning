module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes as Attr
import Random
import Time


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
    ( { gameState = Playing
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
    = GenRandom Time.Posix
    | SetRandomValue Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GenRandom _ ->
            ( model, Random.generate SetRandomValue (Random.int 0 3) )

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
                    [ text "left view"
                    , div
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
                            ] []
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
                ]

        GameOver ->
            div []
                [ showGameOver model ]


showReady : Model -> Html Msg
showReady model =
    h1 [] [ text "サラダコインあんぱんゴルディアスの結び目ゲーム" ]


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
        |> Maybe.andThen (\q -> Just(q.imgSrc))
        |> Maybe.withDefault "gordian_knot.jpg"

-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 1000 GenRandom
