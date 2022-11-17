import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {grey, lightGreen} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                color: lightGreen[500],
                '& .MuiSlider-thumb::after': {
                    width: 6,
                    height: 6,
                    bgcolor: lightGreen[500],
                    zIndex: 2
                },
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    border: 1,
                    bgcolor: grey[50],
                    zIndex: 2,
                },'& .MuiSlider-rail': {
                    zIndex: 1,
                    color: grey["800"]
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
