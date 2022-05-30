import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Box,
  Button,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { dialogStatus } from "./atom";

const ReactDialog = ({ props }: any) => {
  const [dialogOpen, setDialogOpen] = useRecoilState(dialogStatus);

  return (
    <Dialog
      open={dialogOpen.open}
      key={String(new Date())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onBackdropClick={() => {
        setDialogOpen({ ...dialogOpen, open: false });
      }}
    >
      <Box
        style={{
          padding: "40px 40px 20px",
        }}
        textAlign="center"
      >
        {dialogOpen.title !== "" && (
          <DialogTitle id="alert-dialog-title">{dialogOpen.title}</DialogTitle>
        )}
        <DialogContent
          style={{
            padding: 0,
            textAlign: "center",
          }}
        >
          <DialogContentText id="alert-dialog-description">
            {dialogOpen.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            padding: 0,
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Box textAlign="center">
            <Button
              onClick={() => setDialogOpen({ ...dialogOpen, open: false })}
              autoFocus
            >
              확인
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ReactDialog;
