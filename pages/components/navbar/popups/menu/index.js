import React from 'react'


import Dialog from '@material-ui/core/Dialog';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import styles from "./Menu.module.css";


const muiStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: "20%",

        margin: 0,
        "padding-left": theme.spacing(3),
        "padding-right": theme.spacing(3),
        "padding-top": theme.spacing(1),
        "padding-bottom": theme.spacing(3),

        width: "35rem",
        minHeight: "25rem",

        backgroundColor: "#FAFCFE",
        border: "1px solid rgba(14, 14, 44, 0.05)",
        "box-shadow": "0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)",
        "border-radius": "12px",

        [theme.breakpoints.down('577')] : {
            width: "28rem",
        },

        [theme.breakpoints.down('476')] : {
            width: "20rem",
        }
    },

  }));

const titleStyle = (theme) => ({
    root: {
        margin: 0,
        "padding-left": theme.spacing(3),
        "padding-right": theme.spacing(0),
        "padding-top": theme.spacing(1),
        "padding-bottom": theme.spacing(2),
        fontSize: "2.25rem"
    }
});

function ResponsiveDialog() {

    const DialogTitle = withStyles(titleStyle)((props) => {
        const { classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other} >
            
            {  
                onClose &&
                <div className={styles.closeContainer}>
                    <div className={styles.closeButton} onClick={onClose}>
                        <a className={styles.closeX} />
                    </div>
                                     
                </div>

            }

            {/* Shows title */}
            <div className={styles.dialogTitle}>
                Menu
            </div>

            
          </MuiDialogTitle>
        );
      });

    return (
        <div>
            
        </div>
        // <Dialog onClose={handleClose} 
        //     PaperProps={{ classes: {root: classes.paper } }}
        //     aria-labelledby="customized-dialog-title" 
        //     open={open} 
        //     className={styles.titleContainer}
        // >
        //     <DialogTitle id="customized-dialog-title" onClose={handleClose} >
        //         Event
        //     </DialogTitle>

        //     <DialogContent classes={{root: classes.content}}>
        //         <div>
        //             <Link href="/pre-event">
        //                 <button className={styles.sectionButton}>
        //                     Pre-Event
        //                 </button>
        //             </Link>
        //             <Link href="/grand-summit">
        //                 <button className={styles.sectionButton}>
        //                     Grand Summit
        //                 </button>
        //             </Link>
                    
        //         </div>
        //     </DialogContent>

        //     <MuiDialogTitle disableTypography className={styles.dialogTitle} >
        //         Competition
        //     </MuiDialogTitle>

        //     <DialogContent classes={{root: classes.content}}>
        //         <div>
        //             <Link href="/main-comp">
        //                 <button className={styles.sectionButton}>
        //                     Main Competition
        //                 </button>
        //             </Link>
        //             <Link href="/essay-comp">
        //                 <button className={styles.sectionButton}>
        //                     Essay Competition
        //                 </button>
        //             </Link>
                    
        //         </div>
                
        //     </DialogContent>

        //     {
        //         loginText === "LOGIN"
        //         ?
        //         <div>
        //             <button onClick={handleLoginOpen} className={styles.dialogButton}>
        //                 {loginText}
        //             </button>
        //         </div>

        //         :
        //         <Link href="/profile">
        //             <div>
        //                 <button className={styles.dialogButton}>
        //                     {truncateString(loginText)}
        //                 </button>
        //             </div>
        //         </Link>
        //     }

        // </Dialog>
    )
}

export default ResponsiveDialog
