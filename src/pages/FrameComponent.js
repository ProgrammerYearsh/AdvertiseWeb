import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.marketingWebParent}>
          <div className={styles.marketingWeb}>Marketing Web</div>
          <div className={styles.nav}>
            <div className={styles.marketingWeb}>Our Services</div>
            <div className={styles.marketingWeb}>How We Help?</div>
            <div className={styles.marketingWeb}>Pricing</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameChild} alt="" src="../frame-728.svg" />
          <div className={styles.advertiseOnlineNowWithUsParent}>
            <b
              className={styles.advertiseOnlineNowWithUs}
            >{`Advertise online now with us . `}</b>
            <div className={styles.loremIpsumDolorSitAmetCo}>
              <p className={styles.loremIpsumDolor}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <p className={styles.loremIpsumDolor}>
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.mainScreenButtons}>
              <div className={styles.startAdvertiseNowWrapper}>
                <div className={styles.startAdvertiseNow}>
                  Start Advertise Now
                </div>
              </div>
              <div className={styles.knowMoreAboutUsWrapper}>
                <div className={styles.startAdvertiseNow}>
                  Know more about us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourTestimonialsParent}>
        <b className={styles.ourTestimonials}>Our Testimonials</b>
        <div className={styles.frameDiv}>
          <img className={styles.frameItem} alt="" src="../frame-731.svg" />
          <div className={styles.text}>
            <b className={styles.iveDownloadedEhy}>
              <p className={styles.loremIpsumDolor}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </b>
            <b className={styles.ferdinandStindl}>
              — consectetur adipiscin - sed eiusmod tempor incididunt
            </b>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.bookAFreeDigitalMarketingWrapper}>
          <b className={styles.bookAFreeDigitalMarketing}>
            Book A Free Digital Marketing Consultation
          </b>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.yourEmailWrapper}>
            <div className={styles.yourEmail}>Your Email</div>
          </div>
          <div className={styles.bookMyFreeMeetingWrapper}>
            <b className={styles.startAdvertiseNow}>Book my free meeting</b>
          </div>
        </div>
      </div>
      <div className={styles.companyDescParent}>
        <div className={styles.companyDesc}>
          <div className={styles.travelWrapper}>
            <div className={styles.travel}>Marketing Web </div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
            <div className={styles.loremIpsumDolorSitAmetCo1}>
              <p className={styles.loremIpsumDolor}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.navColumnsParent}>
          <div className={styles.navColumns}>
            <div className={styles.navRow}>
              <b className={styles.company}>Company</b>
              <div className={styles.about}>About</div>
              <div className={styles.about}>Careers</div>
              <div className={styles.about}>Mobile</div>
            </div>
            <div className={styles.navRow}>
              <b className={styles.company}>Contact</b>
              <div className={styles.about}>Help/FAQ</div>
              <div className={styles.about}>Affilates</div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.groupWrapper}>
              <img className={styles.frameInner} alt="" src="../group-9.svg" />
            </div>
            <div className={styles.group9CopyWrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy.svg"
              />
            </div>
            <div className={styles.group9CopyWrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy-2.svg"
              />
            </div>
            <div className={styles.group9Copy3Wrapper}>
              <img
                className={styles.frameInner}
                alt=""
                src="../group-9-copy-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
