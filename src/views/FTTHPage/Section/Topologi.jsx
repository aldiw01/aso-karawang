import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function SimpleExpansionPanel() {
  const classes = {
    root: {
      width: '100%',
    },
    heading: {
      fontSize: "15px",
    },
  };

  return (
    <div style={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={classes.heading}>1. InSite Plant (ISP)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            InSite Plant (ISP) merupakan seluruh perangkat atau komponen yang terdapat didalam Central Office.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={classes.heading}>2. OutSite Plant (OSP)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            OutSite Plant (OSP) merupakan seluruh perangkat atau komponen yang terdapat diluar Central Office.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={classes.heading}>3. Feeder Optical Cables</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Feeder Optical Cables merupakan jaringan fiber optik yang menghubungkan antara FTM/ODF dengan ODC.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={classes.heading}>4. Distribution Optical Cables</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Distribution Optical Cables merupakan jaringan fiber optik yang menghubungkan antara ODC dengan ODP.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={classes.heading}>5. Drop Core Cables</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Drop Core Cables merupakan jaringan fiber optik yang menghubungkan antara ODP dengan rumah pelanggan.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={classes.heading}>6. ONT (Optical Network Terminal)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            ONT (Optical Network Terminal) merupakan perangkat aktif yang berada di rumah pelanggan untuk menerima layanan internet, telepon rumah, dan IPTV.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={classes.heading}>7. STB (Set-Top Box)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            STB (Set-Top Box) merupakan perangkat yang digunakan untuk mengubah TV digital biasa menjadi smart TV sehingga dapat menikmati layanan TV interaktif.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
