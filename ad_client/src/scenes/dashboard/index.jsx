import { DownloadOutlined, Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import OverviewChart from "components/OverviewChart";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";

const Dashboard = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetDashboardQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px");
    console.log('data', data);

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1
        },
        {
            field: "createdAt",
            headerName: "Created At",
            flex: 1
        },
        {
            field: "products",
            headerName: "# of products",
            flex: 0.5,
            sortable: false,
            renderCell: (params) => params.value.length
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => `$${Number(params.value).toFixed(2)}`
        }
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <FlexBetween>
                <Header title="DASHBOARD" subtitle="Welcome, Stay, and Enjoy!" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
                        }}
                    >
                        <DownloadOutlined sx={{ mr: "10px" }} />
                        Download Report
                    </Button>
                </Box>
            </FlexBetween>

            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="160px"
                gap="20px"
                sx={{
                    "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" }
                }}
            >
                {/* Row 1 */}
                <StatBox
                    title="Total Customers"
                    value={data && data.totalCustomers}
                    increase="+5%"
                    description="Since last month"
                    icon={
                        <Email sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />
                    }
                />

                <StatBox
                    title="Today Sales"
                    value={data && data.todayStats.totalSales}
                    increase="+50%"
                    description="Too low"
                    icon={
                        <PointOfSale sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />
                    }
                />

                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                >
                    <OverviewChart view="sales" isDashboard={true} />
                </Box>

                <StatBox
                    title="Monthly Sales"
                    value={data && data.thisMonthStats.totalSales}
                    increase="+0.5%"
                    description="Since last month"
                    icon={
                        <PersonAdd sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />
                    }
                />

                <StatBox
                    title="Yearly Sales"
                    value={data && data.yearlySalesTotal}
                    increase="+50%"
                    description="Since last year"
                    icon={
                        <Traffic sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />
                    }
                />

                {/* Row 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                            borderRadius: "5rem"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: theme.palette.background.alt,
                            color: theme.palette.secondary[100],
                            borderBottom: "None"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: theme.palette.primary.alt
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: theme.palette.background.alt,
                            color: theme.palette.secondary[100],
                            borderTop: "none"
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${theme.palette.secondary[200]} !important`
                        }
                    }}
                >
                    <DataGrid
                        loading={isLoading || !data}
                        getRowId={(row) => row._id}
                        rows={(data && data.transactions) || []}
                        columns={columns}
                    />
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 3"
                    backgroundColor={theme.palette.background.alt}
                    p="1.5rem"
                    borderRadius="0.55rem"
                >
                    <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
                        Sales by Category
                    </Typography>

                    <BreakdownChart isDashboard={true} />

                    <Typography p="0 0.6rem" fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
                        Wingardium Leviosa! (Just kidding, it's just a chart)
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;