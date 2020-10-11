module Example exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    test "1+1は2"
        (\_ -> Expect.equal 2 (1 + 1))
