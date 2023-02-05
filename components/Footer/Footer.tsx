import React, { FC, ReactElement } from "react";
// next
import Link from 'next/link';
import Image from 'next/image';
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
//assets
import CodeIcon from '../../public/code.png';
import LinkedinIcon from '../../public/socials/icon-linkedin.svg'
import TwitterIcon from '../../public/socials/icon-twitter.svg';
import InstagramIcon from '../../public/socials/icon-instagram.svg'
import FacebookIcon from '../../public/socials/icon-facebook.svg'


export const Footer: FC = (): ReactElement => {
  return (
    <Box className="footer">
      <Container maxWidth="sm">
        <Grid 
        container 
        direction="column" 
        className="footer-col"  
        >
          <Grid 
            className="footer-col__item"
            item xs={12}
          >
           <Link href="/">
            <Image
              src={CodeIcon}
              alt="code icon"
              width={48}
              height={48}
            />
           </Link>
          </Grid>
          <Grid 
            className="footer-col__item"
            container 
            xs={12} 
            direction="row" 
            alignItems="baseline"
          >
            <Grid className="social-grid-item" item>
              <Link href="https://www.linkedin.com/in/charles-buckley-20447950/" target="_blank">
                <Image
                  className="social-grid-item__icon"
                  src={LinkedinIcon}
                  alt="Linkedin icon"
                />
              </Link>
            </Grid>
             <Grid className="social-grid-item" item>
              <Link href="https://twitter.com/0xagf0x" target="_blank">
                <Image
                  className="social-grid-item__icon"
                  src={TwitterIcon}
                  alt="Twitter icon"
                />
              </Link>
            </Grid>
             <Grid className="social-grid-item" item>
              <Link href="https://www.instagram.com/itscharliebe/" target="_blank">
                <Image
                  className="social-grid-item__icon"
                  src={InstagramIcon}
                  alt="Instagram icon"
                />
              </Link>
            </Grid>
             <Grid className="social-grid-item" item>
              <Link href="https://www.facebook.com/charlie.buckley.161" target="_blank">
                <Image
                  className="social-grid-item__icon"
                  src={FacebookIcon}
                  alt="Facebook icon"
                />
              </Link>
            </Grid>
          </Grid>
          <Grid 
            item
            className="footer-col__item" 
            xs={12}
          >
            <Typography variant="subtitle1">
              {`@${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Grid container direction="column" alignItems="flex-end">
          <Grid item xs={12}>
            <Link className="footer-link" href="/">
              <Typography variant="subtitle1">
                Home
              </Typography>
           </Link>
          </Grid>
          <Grid item xs={12}>
            <Link className="footer-link" href="/">
              <Typography variant="subtitle1">
                About
              </Typography>
           </Link>
          </Grid>
           <Grid item xs={12}>
            <Link className="footer-link" href="/">
              <Typography variant="subtitle1">
                Team
              </Typography>
           </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;