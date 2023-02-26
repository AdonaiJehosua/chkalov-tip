import { Box } from "@mui/material"
import { Button, GeolocationControl, Map, Placemark, RouteButton, YMaps, useYMaps } from "@pbe/react-yandex-maps"
import { useEffect, useRef } from "react";

const style = {

}



export function ContactsPage() {

    // const CustomMap = () => {
    //     const mapRef = useRef(null);
    //     const ymaps = useYMaps(['Map', 'Placemark']);

    //     console.log(ymaps)

    //     useEffect(() => {
    //         if (!ymaps || !mapRef.current) {
    //           return;
    //         }
        
    //         new ymaps.Map(mapRef.current, {
    //           center: [55.76, 37.64],
    //           zoom: 10,
    //         });

    //         const button = new ymaps.control.Button({
    //             data: {
    //                 // Зададим иконку для кнопки.
    //                 image: 'images/button.jpg',
    //                 // Текст на кнопке.
    //                 content: 'Save',
    //                 // Текст всплывающей подсказки.
    //                 title: 'Click to save the route'
    //             },
    //             options: {
    //                 // Зададим опции кнопки.
    //                 selectOnClick: false,
    //                 // У кнопки будет три состояния: иконка, текст и текст + иконка.
    //            // Зададим три значения ширины кнопки для всех состояний.
    //                 maxWidth: [30, 100, 150]
    //             }
    //    });
    //    ymaps.control.Button(button, { float: 'right', floatIndex: 100 });
    //       }, [ymaps]);



    //     return <div ref={mapRef} style={{ width: "320px", height: "240px" }}></div>;
    // };


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
                    <Placemark geometry={[56.89439849, 59.94808121]} />
                    <RouteButton options={{ float: "right" }} defaultState={{ to: "moscow", fromEnabled: 'false' }} />


                </Map>
            </Box>
        </YMaps>
    )
}