import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        blue:{
            "900":"#051828",
            "800":"#012A4A",
            "700":"#0C263B",
            "600":"#01395A",
            "500":"#014D6E",
            "400":"#016F91",
            "300":"#0080A3",
            "200":"#0092B5",
            "100":"#00A3C6",
            "50":"#00B4D8",
        }
    },
    fonts:{
            heading:'Poppins',
            body:'Poppins',
    },
    styles:{
        global:{
            body: {
                bgGradient:"linear(238deg, blue.900 0%,blue.700 100%)",
                color:'gray.50',
                minH:'100vh'
            }
        }
    }   
})