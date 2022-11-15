import React from 'react'
import MainLayout from '../layout/MainLayout';

import TaskCompleted from '../../assets/img/icons/task-completed-icon.svg';
import NewTask from '../../assets/img/icons/new-task-icon.svg';
import ProjectDone from '../../assets/img/icons/project-done-icon.svg';
import Sparkline from '../../assets/img/icons/sparkline.svg';

function Dashboard() {
  return (
    <MainLayout>
        <div className="dashboard">
          <main className="main">
            <div className="task-cards-con">

              {/* task completed card */}
              <div className="task-card card">

                <div className="headercon">
                  <div className="iconbox">
                    <img src={TaskCompleted} alt="task completed" />
                    <span className='text'>Task Completed</span>
                  </div>
                  <span className="counter">08</span>
                </div>

                <div className="details">
                  <div className="sparkline">
                    <img src={Sparkline} alt="" />
                  </div>
                  <div className="infobox">
                    <p><span className='more'>10+</span> more</p>
                    <span className=''>from last week</span>
                  </div>
                </div>

              </div>

              {/* New Task card */}
              <div className="task-card card">

                <div className="headercon">
                  <div className="iconbox">
                    <img src={NewTask} alt="task completed" />
                    <span className='text'>New Task</span>
                  </div>
                  <span className="counter">10</span>
                </div>

                <div className="details">
                  <div className="sparkline">
                    <img src={Sparkline} alt="" />
                  </div>
                  <div className="infobox">
                    <p><span className='more'>10+</span> more</p>
                    <span className=''>from last week</span>
                  </div>
                </div>

              </div>

              {/* Project Done card */}
              <div className="task-card card">

                <div className="headercon">
                  <div className="iconbox">
                    <img src={ProjectDone} alt="task completed" />
                    <span className='text'>Project Done</span>
                  </div>
                  <span className="counter">10</span>
                </div>

                <div className="details">
                  <div className="sparkline">
                    <img src={Sparkline} alt="" />
                  </div>
                  <div className="infobox">
                    <p><span className='more'>10+</span> more</p>
                    <span className=''>from last week</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Completed task line  chart */}

            <div className="card task-chartbox">

            </div>
          </main>
          <aside className='aside'>

          </aside>
        </div>
    </MainLayout>
  )
}

export default Dashboard