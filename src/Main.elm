module Main exposing (main)

import Browser
import Html exposing (Html, div, text)


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    String


init : Model
init =
    "てんぷら🍤"



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
    div []
        [ text model ]
