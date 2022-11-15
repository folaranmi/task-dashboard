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
              <div className="headercon">
                <h3 className="section-title">Task Done</h3>
                <ul className="duration">
                  <li className='duration__list'>Daily</li>
                  <li className='duration__list'>Weekly</li>
                  <li className='duration__list active'>Monthly</li>
                </ul>
              </div>
            </div>


            {/* List of task */}

            <div className="card taskbox">
              <div className="headercon">
                <h3 className="section-title">Task</h3>
                
                <div className="filterbox">

                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                  <td>Name Of Task</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Hours</td>
                  <td>Progress</td>
                  <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User journey of the project</td>
                    <td>Jan 1, 2022</td>
                    <td>Feb 1, 2022</td>
                    <td>80</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>


          </main>
          <aside className='aside'>

          </aside>
        </div>
    </MainLayout>
  )
}

export default Dashboard