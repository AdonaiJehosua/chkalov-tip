import { Box } from "@mui/material"
import { Button, GeolocationControl, Map, YMaps } from "@pbe/react-yandex-maps"

const style = {

}

export function ContactsPage() {
    return (
        <YMaps>

            <Box sx={style}>
                Контакты
                <Map defaultState={{ center: [56.89439849, 59.94808121], zoom: 17 }}>
                    <Button
                        options={{ maxWidth: 128 }}
                        data={{ content: "Unpress me!" }}
                        defaultState={{ selected: true }}
                    />
                        <GeolocationControl options={{ float: "left" }} />

                </Map>
            </Box>
        </YMaps>
    )
}