module Main exposing (..)

import Browser
import Html exposing (..)


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
    { gameState = Ready }



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
            div []
                [ showPlaying model ]

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
