import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div> <div className="footer-bottom wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="footer-bottom-inner">
                  <p className="footer-bottom-copy-right">
                    <Link href="#">
                      © Copyrights 2022 Darkninja All rights reserved.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="footer-top-bottom top-move">
                  <div className="top-to-bottom">
                    Go to top{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={6}
                      viewBox="0 0 9 6"
                      fill="none"
                    >
                      <path
                        d="M4.49984 2.828L1.67184 5.657L0.256836 4.243L4.49984 0L8.74284 4.243L7.32784 5.657L4.49984 2.828Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-move-btn top-move wow fadeInUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={6}
            viewBox="0 0 9 6"
            fill="none"
          >
            <path
              d="M4.49984 2.828L1.67184 5.657L0.256836 4.243L4.49984 0L8.74284 4.243L7.32784 5.657L4.49984 2.828Z"
              fill="white"
            />
          </svg>
        </div></div>
  )
}
