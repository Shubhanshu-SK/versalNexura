import React, { useState, useEffect } from 'react';

const RecruitmentNotification = ({ 
  show = true, 
  onClose = () => {},
  type = 'new-job',
  title = 'New Recruitments',
  message = 'Recruitment for all domains are open register now ',
  company = 'Nexura',
  actionText = 'Apply Now',
  onAction = () => {},
  position = 'bottom-right',
  autoClose = false,
  autoCloseDelay = 90000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const notificationTypes = {
    'new-job': {
        icon: '👥',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#667eea'
    }
  };

  const currentType = notificationTypes[type] || notificationTypes['new-job'];

  const positions = {
    'top-right': { top: '20px', right: '20px' },
    'top-left': { top: '20px', left: '20px' },
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'top-center': { top: '20px', left: '50%', transform: 'translateX(-50%)' },
    'bottom-center': { bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      pointerEvents: 'none'
    },
    notification: {
      position: 'fixed',
      ...positions[position],
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      maxWidth: '400px',
      minWidth: '320px',
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(-20px)',
      opacity: isVisible ? 1 : 0,
      pointerEvents: 'auto'
    },
    header: {
      background: currentType.gradient,
      padding: '20px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255,255,255,0.1)',
      transform: 'skewX(-15deg)',
      transformOrigin: 'top left'
    },
    headerContent: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    iconContainer: {
      background: 'rgba(255,255,255,0.2)',
      padding: '10px',
      borderRadius: '10px',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      margin: 0,
      fontFamily: 'Arial, sans-serif'
    },
    timestamp: {
      fontSize: '0.8rem',
      opacity: 0.9,
      margin: '5px 0 0 0'
    },
    closeButton: {
      background: 'rgba(255,255,255,0.2)',
      border: 'none',
      color: 'white',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease'
    },
    body: {
      padding: '20px'
    },
    message: {
      fontSize: '1rem',
      color: '#2c3e50',
      marginBottom: '15px',
      fontWeight: '500',
      lineHeight: '1.4',
      fontFamily: 'Arial, sans-serif'
    },
    companyInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    companyTag: {
      background: currentType.color,
      color: 'white',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 'bold'
    },
    newBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#e74c3c',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    },
    actionButtons: {
      display: 'flex',
      gap: '10px'
    },
    actionButton: {
      flex: 1,
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'Arial, sans-serif'
    },
    viewButton: {
      background: '#ecf0f1',
      color: '#2c3e50'
    },
    primaryButton: {
      background: currentType.gradient,
      color: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    },
    progressBar: {
      height: '3px',
      background: '#ecf0f1',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: currentType.gradient,
      transition: `width ${autoCloseDelay}ms linear`,
      width: isVisible && autoClose ? '100%' : '0%'
    }
  };

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsAnimating(true);
      
      if (autoClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
        
        return () => clearTimeout(timer);
      }
    } else {
      setIsVisible(false);
    }
  }, [show, autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 500);
  };

  const handleAction = () => {
    onAction();
    // handleClose();
  };

  if (!show && !isAnimating) return null;

  return (
    <div style={styles.overlay}>
      <style>
        {`
          .recruitment-notification {
            animation: ${isVisible ? 'slideInBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'slideOut 0.4s ease-in'};
          }
          
          @keyframes slideInBounce {
            0% {
              transform: translateX(100%) scale(0.8);
              opacity: 0;
            }
            80% {
              transform: translateX(-10px) scale(1.05);
              opacity: 1;
            }
            100% {
              transform: translateX(0) scale(1);
              opacity: 1;
            }
          }
          
          @keyframes slideOut {
            from {
              transform: translateX(0) scale(1);
              opacity: 1;
            }
            to {
              transform: translateX(100%) scale(0.8);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          
          .recruitment-notification:hover {
            transform: scale(1.02) !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
          }
          
          .close-btn:hover {
            background: rgba(255,255,255,0.3) !important;
            transform: scale(1.1);
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          
          .view-btn:hover {
            background: #d5dbdb !important;
          }
          
          .pulse-animation {
            animation: pulse 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <div
        style={styles.notification}
        className={`recruitment-notification ${isAnimating ? 'pulse-animation' : ''}`}
      >
        <div style={styles.header}>
          <div style={styles.headerOverlay}></div>
          <div style={styles.headerContent}>
            <div style={styles.headerLeft}>
              <div style={styles.iconContainer}>
                {currentType.icon}
              </div>
              <div>
                <h3 style={styles.headerText}>{title}</h3>
                <p style={styles.timestamp}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            <button
              style={styles.closeButton}
              className="close-btn"
              onClick={handleClose}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>

        <div style={styles.body}>
          <p style={styles.message}>{message}</p>
          
          <div style={styles.companyInfo}>
            <span style={styles.companyTag}>
              {company}
            </span>
            {isAnimating && (
              <div style={styles.newBadge}>
                <span>❤️</span>
                <span>NEW</span>
              </div>
            )}
          </div>

          <div style={styles.actionButtons}>
            <button
              style={{...styles.actionButton, ...styles.viewButton}}
              className="action-btn view-btn"
              onClick={handleClose}
            >
              View Details →
            </button>
            <button
              style={{...styles.actionButton, ...styles.primaryButton}}
              className="action-btn"
              onClick={handleAction}
            >
              {actionText}
            </button>
          </div>
        </div>

        {autoClose && (
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
        )}
      </div>
    </div>
  );
};

// Demo component to show usage
const RecruitmentDemo = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [notificationConfig, setNotificationConfig] = useState({
    type: 'new-job',
    title: 'Register Now!',
    message: 'Recruitments for all domain are open ',
    company: 'Nexura',
    actionText: 'Apply Now'
  });


  const handleAction = () => {
    // alert(`${notificationConfig.actionText} clicked for ${notificationConfig.company}!`);
    window.open("https://forms.gle/pdaLG1936wXXB2ui7","_blank")
  };

  const handleClose = () => {
    setShowNotification(false);
  };


  return (
    <div >
      <RecruitmentNotification
        show={showNotification}
        type={notificationConfig.type}
        title={notificationConfig.title}
        message={notificationConfig.message}
        company={notificationConfig.company}
        actionText={notificationConfig.actionText}
        onAction={handleAction}
        onClose={handleClose}
        position="bottom-right"
        autoClose={false}
        autoCloseDelay={90000}
      />
    </div>
  );
};

export default RecruitmentDemo;
