import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({message, name}, ref) => {
    return (
        <div ref={ref} className='message'>
            <Card className='card' >
                <CardContent className='cardContent'>
                    <Typography color="white" variant="h5" component="h3">
                        <span className='name'>{message.name || 'Anonymous'}: </span>{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message;
