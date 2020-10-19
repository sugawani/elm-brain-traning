module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes as Attr


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    { gameState : GameState }


type GameState
    = Ready
    | Playing
    | GameOver


init : Model
init =
    { gameState = Playing }



-- UPDATE


type Msg
    = None


update : Msg -> Model -> Model
update msg model =
    case msg of
        None ->
            model



-- VIEW


view : Model -> Html Msg
view model =
    case model.gameState of
        Ready ->
            div []
                [ showReady model ]

        Playing ->
            div [ Attr.style "display" "flex"
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
                        [ text "ここにタイトルが出る想定"]
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
