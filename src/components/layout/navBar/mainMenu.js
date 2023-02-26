import { Button } from "@mui/material"
import Link from "next/link"
import { mainMenuStyles } from "@/styles/navBarStyles"

export function MainMenu({pages, selected, handleMenuSelectedItem}) {
    return (
        pages.map((page) => (
            <Link
                key={page.pageName}
                onClick={() => handleMenuSelectedItem(page.pageName)}
                href={page.href}
                style={{ textDecoration: 'none' }}
            >
                <Button sx={mainMenuStyles.mdMenuElem}>
                    {page.pageName === selected ? <span style={{ textDecoration: 'underline' }}>{page.pageName}</span> : page.pageName}
                </Button>
            </Link>
        ))
    )
}