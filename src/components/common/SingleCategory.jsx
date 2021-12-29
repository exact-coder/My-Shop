import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const SingleCategory = ({item}) => {
    const history = useHistory();
    const showCategoryProducts = () => {
        history.push(`category-${item?.title}-${item?.id}`)
    }
    return (
        <CardActionArea onClick={showCategoryProducts}>
            <Card style={{
                width: "100%",
                height: "60px",
                backgroundColor: "var(--button)",
                backgroundImage: `url(${item?.image})`,
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
