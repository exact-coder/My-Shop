import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const SingleBrandName = ({item}) => {
    const history = useHistory();
    const showBrandProducts = () => {
        history.push(`brand-${item?.title}-${item?.id}`)
    }
    return (
        <CardActionArea onClick={showBrandProducts}>
            <Card style={{
                width: "100%",
                height: "60px",
                backgroundColor: "var(--button)",
                backgroundImage: `url(${item?.logo})`,
                backgroundSize: '100%',
                color: "var(--white)",
                position: "relative",
            }}>
                <Box style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    textAlign: "center",
                    display: "grid",

                }}>
                    <Typography variant='h6'>{item?.title}</Typography>
                </Box>
            </Card>
        </CardActionArea>
    )
}
