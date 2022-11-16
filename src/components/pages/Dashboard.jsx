import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';

import TaskCompleted from '../../assets/img/icons/task-completed-icon.svg';
import NewTask from '../../assets/img/icons/new-task-icon.svg';
import ProjectDone from '../../assets/img/icons/project-done-icon.svg';
import Sparkline from '../../assets/img/icons/sparkline.svg';
import MoreIcon from '../../assets/img/icons/more-icon.svg';

function Dashboard() {

  const [showMore, setShowMore] = useState(false);
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
                  <th scope='col'>Name Of Task</th>
                  <th scope='col'>Start Date</th>
                  <th scope='col'>End Date</th>
                  <th scope='col'>Hours</th>
                  <th scope='col'>Progress</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Wireframing the project</td>
                  <td>Feb 1, 2022</td>
                  <td>Feb 28, 2022</td>
                  <td>80</td>
                  <td className='flex'>
                    <div for="task-status" className='status'>60% complete</div>
                    <progress id="task-status" value="60" max="100"> </progress>
                  </td>
                  <td>
                    <div className="morebox">
                      <img src={MoreIcon} alt="more icon" onClick={() => setShowMore(!showMore)} />
                      {showMore && <div className={`optionbox ${showMore ? 'active' : '' }`}>
                        <div className='action'>Complete</div>
                        <div className='action'>Edit</div>
                        <div className='action'>Delete</div>
                      </div>}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>User journey of the projects bdjkgbdkjbgsk jbgksdjgbksdjfb dgkjdbkgjrbgkbjdasbk ajsdfbabjskdbfjkasd</td>
                  <td>Jan 1, 2022</td>
                  <td>Feb 1, 2022</td>
                  <td>80</td>
                  <td className='flex'>
                    <div for="task-status" className='status'>60% complete</div>
                    <progress id="task-status" value="60" max="100"> </progress>
                  </td>
                  <td>
                    <div className="morebox">
                      <img src={MoreIcon} alt="more icon" onClick={() => setShowMore(!showMore)} />
                      {showMore && <div className={`optionbox ${showMore ? 'active' : '' }`} >
                        <div>Complete</div>
                        <div>Edit</div>
                        <div>Delete</div>
                      </div>}
                    </div>
                  </td>
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