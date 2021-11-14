import { Flex } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from '../../components/Card'

import "./styles.module.css";

export default function Selector() {
    const sagas = [0, 1, 2, 3]
    return (
        <Flex direction="column" flex="1">
            <Header nameModule="Seletor" />
            <Flex direction="row">

                <Swiper slidesPerView={3}   spaceBetween={10} centeredSlides={true} pagination={{
                    "clickable": true
                }}>
                    {
                        sagas.map((v, i) => {
                            return (<SwiperSlide key={i} >
                                <Card hrefEdit="/selector/editor" hrefPlay="/play" itsCompleted={ v == 1} />
                            </SwiperSlide>)
                        })
                    }
                </Swiper>
            </Flex>
        </Flex>
    );
}