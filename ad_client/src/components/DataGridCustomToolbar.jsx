import { IconButton, InputAdornment, TextField } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport } from "@mui/x-data-grid";
import { Search } from "@mui/icons-material";

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
    return (
        <GridToolbarContainer>
            <FlexBetween width="100%">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>

                <TextField
                    label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    variant="standard"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => {
                                        setSearch(searchInput);
                                        setSearchInput("");
                                    }}>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </FlexBetween>
        </GridToolbarContainer>
    );
};

export default DataGridCustomToolbar;