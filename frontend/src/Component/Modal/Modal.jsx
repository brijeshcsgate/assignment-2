import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  //   border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};

export default function BasicModal({
  button,
  content,
  submitHide,
  submitForm,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    submitForm();
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{button}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {content}
          <div className="modalcontent-content-buttons flex flex-row justify-end gap-[1rem] p-[1rem]">
            <button
              onClick={handleClose}
              className="modalcontent-content-buttons-cancel border-2 border-solid border-transparent hover:border-black text-grey-600 rounded-[4px] text-[14px] py-[10px] px-[1rem] transition duration-[0.5s] ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`modalcontent-content-buttons-cancel border-2 border-solid border-transparent hover:border-black hover:bg-white hover:text-black bg-black text-[14px] text-white py-[10px] px-[1rem] rounded-[4px] transition duration-[0.5s] ease-in-out ${submitHide}`}
            >
              Submit
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
