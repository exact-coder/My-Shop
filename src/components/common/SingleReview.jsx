import { Avatar, Card, CardHeader } from '@material-ui/core'
import React from 'react'

export const SingleReview = ({item}) => {
    return (
        <Card>
            <CardHeader style={{color: 'var(--nabvar)'}}
                avatar={
                    <Avatar style={{backgroundColor: 'var(--orange)'}}>
                        {item?.customer?.username?.[0]}
                    </Avatar>
                }
                title = {item?.title}
                subheader={item?.customer?.username}
            />
        </Card>
    )
}
