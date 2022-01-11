import { Typography } from '@material-ui/core'
import React from 'react'

export const NotFoundPage = () => {
    return (
        <div>
            <Typography style={{
                fontSize: '40px',textAlign: 'center',margin: 'auto',
                color: 'var(--orange)', fontWeight: 'bolder'
            }}>404 ,Not Found</Typography>
        </div>
    )
}
