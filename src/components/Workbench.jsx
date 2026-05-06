import React from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, Copy, Check } from "phosphor-react";

export default function Workbench() {
  const [copied, setCopied] = React.useState(false);
  const email = "koraydemirmc@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="workbench" className="container section-padding">
      <div className="section-header">
        <h2 className="pixel-font">The Signal Station</h2>
        <p>Send a digital signal to my headquarters.</p>
      </div>

      <div className="mailbox-wrapper">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-block mailbox-inner"
        >
          <div className="mailbox-visual">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="floating-envelope"
            >
              <EnvelopeSimple size={64} weight="duotone" color="var(--accent)" />
            </motion.div>
            <div className="mailbox-base" />
          </div>

          <div className="mailbox-content">
            <div className="channel-badge pixel-font">DIRECT CHANNEL</div>
            <h3 className="pixel-font">Transmission Hub</h3>
            <p className="transmission-desc">
              For legendary collaborations and high-level technical missions, transmit your message here:
            </p>
            
            <div className="email-card" onClick={handleCopy}>
              <div className="email-inner">
                <span className="email-text">{email}</span>
                <div className="copy-indicator">
                  {copied ? <Check size={20} color="#2ecc71" /> : <Copy size={20} />}
                </div>
              </div>
              <div className="copy-hint pixel-font">
                {copied ? "COPIED TO INVENTORY!" : "TAP TO COPY ADDRESS"}
              </div>
            </div>

            <a href={`mailto:${email}`} className="mc-button primary launch-btn">
              OPEN MAIL CLIENT
            </a>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mailbox-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        .mailbox-inner {
          display: grid;
          grid-template-columns: 300px 1fr;
          background: rgba(44, 62, 80, 0.5);
          border: 4px solid #34495e;
          padding: 60px;
          gap: 40px;
          align-items: center;
        }
        .mailbox-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
        .mailbox-base {
          width: 80px;
          height: 140px;
          background: #7f8c8d;
          border: 4px solid #34495e;
          position: relative;
          box-shadow: inset 8px 0px 0px rgba(0,0,0,0.1);
        }
        .mailbox-base::after {
          content: '';
          position: absolute;
          top: -20px;
          left: -10px;
          width: 100px;
          height: 40px;
          background: #bdc3c7;
          border: 4px solid #34495e;
        }
        .mailbox-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .channel-badge {
          font-size: 0.6rem;
          color: var(--accent);
          background: rgba(253, 203, 110, 0.1);
          padding: 6px 12px;
          display: inline-block;
          width: fit-content;
          border: 1px solid rgba(253, 203, 110, 0.3);
        }
        .transmission-desc {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 8px;
        }
        .email-card {
          background: rgba(0,0,0,0.3);
          border: 2px solid rgba(255,255,255,0.1);
          padding: 20px;
          cursor: pointer;
          transition: 0.2s;
        }
        .email-card:hover { border-color: var(--accent); }
        .email-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          gap: 15px;
        }
        .email-text {
          font-size: 1.2rem;
          color: #fff;
          word-break: break-all;
        }
        .copy-hint {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.4);
          text-align: center;
        }
        .launch-btn {
          justify-content: center;
          padding: 18px;
          font-size: 1rem;
          margin-top: 10px;
        }

        @media (max-width: 850px) {
          .mailbox-inner {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            text-align: center;
          }
          .mailbox-visual { margin-bottom: 20px; }
          .channel-badge { margin: 0 auto; }
          .email-text { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .email-inner { flex-direction: column; }
          .email-text { font-size: 0.9rem; }
        }
      `}} />
    </section>
  );
}
