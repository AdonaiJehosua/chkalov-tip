import { Box } from "@mui/material"
import { Button, GeolocationControl, Map, Placemark, RouteButton, YMaps } from "@pbe/react-yandex-maps"

const style = {
    wrapper: {
        width: '100%',
        height: '100%'
    },
    mapWrapper: {
        width: '50%',
        height: '80%',
        border: '1px solid black',
        borderRadius: '10px',
        overflow: 'hidden'
    }
}



export function ContactsPage() {

    return (
        <Box sx={style.wrapper}>
        <Box sx={style.mapWrapper}>
            <YMaps query={{
                apikey: 'aa28440e-21cf-421f-8f0e-a5ee25084a75'
            }}>
                <Map defaultState={{ center: [56.89439849, 59.94808121], zoom: 17 }} modules={['geolocation', 'geocode']} width={'100%'} height={'100%'}>
                    <Button
                        options={{ maxWidth: 128 }}
                        data={{ content: "Unpress me!" }}
                        defaultState={{ selected: true }}
                    />
                    <GeolocationControl options={{ float: "left" }} />
                    <Placemark geometry={[56.89439849, 59.94808121]} />
                    <RouteButton options={{ float: "right" }} defaultState={{ to: "moscow", fromEnabled: 'false' }} />

                </Map>
            </YMaps>
        </Box>
        </Box>
    )
}