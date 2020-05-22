import React from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    RootStateType,
    startCountdown,
    pauseCountdown,
    nextStage,
} from "@state"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"
import { NextStageIcon } from "./NextStageIcon"
import { Volume } from "./Volume"

import { Box } from "@styled"

export const AppPage = () => {
    const dispatch = useDispatch()

    const { paused, remainingTime } = useSelector(
        (state: RootStateType) => state.app
    )

    const togglePause = (paused: boolean) =>
        dispatch(paused ? pauseCountdown() : startCountdown(remainingTime))

    return (
        <Box
            bgcolor="bg.dark"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            p={4}
            height={1}
        >
            <Box mt={6}>
                <Countdown stage="work" timeMs={remainingTime} />
            </Box>

            <PlayButton paused={paused} onChange={togglePause} />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={1}
            >
                <Box>
                    <Box mb={2}>
                        <Rounds />
                    </Box>
                    <Box mb={2}>
                        <ResetButton />
                    </Box>
                </Box>
                <Box display="flex">
                    <Box mr={3}>
                        <button onClick={() => dispatch(nextStage())}>
                            <NextStageIcon size={20} />
                        </button>
                    </Box>

                    <Volume />
                </Box>
            </Box>
        </Box>
    )
}
