import React, { useState } from "react";
function Entry() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <main className="entry-background">
      <div className="entry-title">
        <svg viewBox="0 0 495.296 495.296" className="entry-logo">
          <g>
            <g>
              <path d="M445.63,175.608h-26.076v-21.606h9.137c15.851,0,30.32-11.12,34.408-26.434l6.405-24.012    l8.177-30.669h-31.734H160.325h-31.742l8.177,30.669l6.405,24.004c1.683,6.316,5.194,11.843,9.779,16.249    c-0.163,0.024-0.317,0.041-0.48,0.065c-15.396,1.553-29.783,6.08-43.033,12.965C40.697,187.549-12.651,260.202,2.631,341.244    c4.625,24.532,59.282,17.915,59.599-5.731c0.658-50.023,19.687-116.149,67.15-139.998c3.95-1.65,8.023-3.064,12.136-4.357    c-0.114,0.52-0.293,1.024-0.358,1.553l-30.027,212.595c-1.236,9.445,5.487,17.103,15.013,17.103h353.991    c9.527,0,16.249-7.657,15.013-17.103l-30.027-212.595C463.879,183.265,455.157,175.608,445.63,175.608z M445.947,97.273    l-6.405,24.004c-1.227,4.601-6.08,8.332-10.844,8.332H177.574c-4.763,0-9.616-3.731-10.844-8.332l-6.405-24.004    C160.325,97.273,445.947,97.273,445.947,97.273z M136.785,398.031l27.97-198.028h276.762l27.97,198.028H136.785z" />
              <path d="M413.294,211.634H234.824c0.764,2.04,1.13,4.398,0.959,7.096    c-2.187,33.376-17.98,91.479,17.33,112.313c19.135,11.291,1.796,41.114-17.411,29.783    c-50.739-29.938-37.635-92.885-34.416-142.096c0.179-2.699,0.862-5.056,1.894-7.096h-10.209c-6.747,0-12.924,5.422-13.794,12.112    l-21.264,150.533c-0.87,6.69,3.885,12.112,10.632,12.112h269.17c6.747,0,11.502-5.422,10.632-12.112l-21.256-150.533    C426.211,217.056,420.033,211.634,413.294,211.634z" />
            </g>
          </g>
        </svg>
        <p>Coffee Lab</p>
      </div>
      <div className="entry-card">
        <section className="entry-pagination">
          <div className={`${isLogin ? "" : "right"} pagination-blob`}></div>
          <button onClick={() => setIsLogin(true)} className="entry-button">
            Login
          </button>
          <button onClick={() => setIsLogin(false)} className="entry-button">
            Sign Up
          </button>
        </section>
        <form className="login-form">
          <div className="input-container">
            <svg viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <input type="text" placeholder="Username/Email" />
          </div>

          <div className="input-container">
            <svg viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <input type="password" placeholder="password" />
          </div>

          <button className="login-button">Log In</button>
        </form>
      </div>
    </main>
  );
}

export default Entry;
