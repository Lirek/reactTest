import React, { useEffect } from 'react'
import { useGetIdentity } from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';
import moment from 'moment';

export const Dashboard = () => {


    const {identity , loading} =  useGetIdentity();
    const date = moment();
    const data = [
        {lineValue: 10,lineValue2: 20,argument: 1},
        {lineValue: 20,lineValue2: 10,argument: 2},
        {lineValue: 30,lineValue2: 15,argument: 3},
        {lineValue: 40,lineValue2: 25,argument: 4},
        {lineValue: 50,lineValue2: 30,argument: 5}] 
    
    return (
            <Grid container style={{flexDirection:'column'}}>
                <Typography component="h1" variant="h5" style={{marginTop:5,marginBottom:10}}>
                    Bienvenido {  loading ?  " " : identity.nombre }
                </Typography>

                <Divider style={{marginBottom:10}}/>
                
                <Grid container style={{flexDirection:'row'}}>
                    <Card style={{marginLeft:10,flex:1}}>
                        <CardHeader title="Grafico 1" />
                        <Paper>
                            <Chart data={data}>
                                <ArgumentAxis />
                                <ValueAxis />
                                <LineSeries
                                    name="line"
                                    valueField="lineValue"
                                    argumentField="argument"
                                />
                                <LineSeries
                                    name="line2"
                                    valueField="lineValue2"
                                    argumentField="argument"
                                />                                
                            </Chart>
                        </Paper>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Grafico 2" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                </Grid>
                
                <Grid container style={{flexDirection:'row',marginTop:10}}>
                    <Card style={{marginLeft:10,flex:1}}>
                        <CardHeader title="Card 1" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Card 2" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Card 3" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                </Grid>
            </Grid>
        
        
    )
}
