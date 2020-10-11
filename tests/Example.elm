module Example exposing (..)

import Expect exposing (Expectation)
import Main exposing (..)
import Test exposing (..)
import Test.Html.Query as Query
import Test.Html.Selector as Selector


suite : Test
suite =
    describe "test"
        [ describe "showReady"
            [ test "ゲーム開始前の文字列が表示されること"
                (\_ ->
                    showReady { gameState = Ready }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "サラダコインあんぱんゴルディアスの結び目ゲーム" ]
                )
            ]
        , describe "showPlaying"
            [ test "ゲームプレイ中の文字列が表示されること"
                (\_ ->
                    showPlaying { gameState = Playing }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "playing page" ]
                )
            ]
        , describe "showGameOver"
            [ test "ゲーム終了の文字列が表示されること"
                (\_ ->
                    showGameOver { gameState = GameOver }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "gameover page!" ]
                )
            ]
        , describe "view"
            [ test "GameState Ready"
                (\_ ->
                    view { gameState = Ready }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "サラダコインあんぱんゴルディアスの結び目ゲーム" ]
                )
            , test "GameState Playing"
                (\_ ->
                    view { gameState = Playing }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "playing page" ]
                )
            , test "GameState GameOver"
                (\_ ->
                    view { gameState = GameOver }
                        |> Query.fromHtml
                        |> Query.has [ Selector.text "gameover page!" ]
                )
            ]
        ]
