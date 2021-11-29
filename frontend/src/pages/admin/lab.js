import React from 'react'
import Admin from '../../layouts/Admin';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import Tasks from '../../components/Tasks/Tasks';

import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
import PersonIcon from '@mui/icons-material/Person';

function Lab() {
    return (
        <GridContainer>
            <Typography variant="h4">Lab Order Tracking</Typography>
            <GridItem xs={12} sm={12} md={12}>
                <CustomTabs
                    title="Lab Orders:"
                    headerColor="dark"
                    tabs={[
                        {
                            tabName: "Patient",
                            tabIcon: PersonIcon,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[0, 3]}
                                    tasksIndexes={[0, 1, 2, 3]}
                                    tasks={"bugs"}
                                />
                            ),
                        },
                        {
                            tabName: "Date",
                            tabIcon: Code,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[0]}
                                    tasksIndexes={[0, 1]}
                                    tasks={"website"}
                                />
                            ),
                        },
                        {
                            tabName: "Phsycian",
                            tabIcon: Cloud,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[1]}
                                    tasksIndexes={[0, 1, 2]}
                                    tasks={"server"}
                                />
                            ),
                        },
                    ]}
                />
            </GridItem>


        </GridContainer>
    )
}

Lab.layout = Admin;
export default Lab
