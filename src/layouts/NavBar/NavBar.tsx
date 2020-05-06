import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

import { OpenMenuIcon } from "./OpenMenuIcon"
import { CloseWindowIcon } from "./CloseWindowIcon"
import { MinimizeWindowIcon } from "./MinimizeWindowIcon"
import { Box } from "@styled"
import { routes } from "@constants"

const StyledLink = styled(Link)`
    display: block;
    height: fit-content;
`

export const NavBar = () => {
    const location = useLocation()
    const onMenu = location.pathname.includes(routes.menu.name)

    return (
        <Box
            bgcolor="bg.dark"
            fontWeight={400}
            p={5}
            display="flex"
            justifyContent="space-between"
        >
            <StyledLink to={onMenu ? routes.app.name : routes.menu.name}>
                <OpenMenuIcon active={!onMenu} size={25} />
            </StyledLink>
            <MinimizeWindowIcon />
            <CloseWindowIcon />

            {/* <Box color="text.highlight">Pomotroid</Box> */}
        </Box>
    )
}