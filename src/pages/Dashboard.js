import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { SimpleShowLayout } from 'react-admin';

export const Dashboard = () => {
    return (
        
            <SimpleShowLayout>
                <Card>
                    <CardHeader title="Welcome to the administration" />
                    <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                </Card>
            </SimpleShowLayout>
        
        
    )
}
