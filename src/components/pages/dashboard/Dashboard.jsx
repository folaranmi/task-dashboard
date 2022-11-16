import React, { useEffect, useState } from 'react'
import MainLayout from '../../layout/MainLayout';

import TaskCompleted from '../../../assets/img/icons/task-completed-icon.svg';
import NewTask from '../../../assets/img/icons/new-task-icon.svg';
import ProjectDone from '../../../assets/img/icons/project-done-icon.svg';
import Sparkline from '../../../assets/img/icons/sparkline.svg';
import MoreIconVertical from '../../../assets/img/icons/more-icon.svg';
import MoreIconHorizontal from '../../../assets/img/icons/more-icon-horizontal.svg';
import DashboardLite from '../../../assets/img/icons/dashboard-light.svg';
import Calendar from '../../../assets/img/icons/calendar-icon.svg';
import Kelvin from '../../../assets/img/icons/kelvin.png';
import Webber from '../../../assets/img/icons/webber.png';
import dateFormat from 'dateformat';
// import Chris from '../../../assets/img/icons/chris.png';
// import NewTaskForm from './NewTaskForm';

import { useFormik } from 'formik'
import * as yup from 'yup';

function Dashboard() {

  const [showMore, setShowMore] = useState(false);

  // const getTodos = localStorage.getItem('todos')
  // const todos = getTodos ? JSON.parse(getTodos) : [];

  // get todos data

  const getTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []
  }

  const [todos, setTodos] = useState(getTodos());

  // Saving todos data to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])



  const { handleSubmit, errors, touched, values, handleChange } = useFormik({
    // Set initial values
    initialValues: {
      taskTitle: '',
      startDate: '',
      endDate: '',
      hourBudgeted: ''
    },

    // Set validation rules
    validationSchema: yup.object({
      taskTitle: yup.string().required('Give your task a name'),
      startDate: yup.date().required('Enter a start date'),
      endDate: yup.date().required('Enter an end date'),
      hourBudgeted: yup.string().required('Enter a budgeted hour'),
    }),

    // This excute when the form is submitted
    onSubmit: (values, onSubmitProps) => {
      console.log(values);
      let todo = {
        taskTitle: values.taskTitle,
        startDate: values.startDate,
        endDate: values.endDate,
        hourBudgeted: values.hourBudgeted,
        done: false,
      }

      setTodos([...todos, todo]);
      onSubmitProps.resetForm();

    }
  })


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
                {todos.length > 0 && <tr>
                  <th scope='col'>Name Of Task</th>
                  <th scope='col'>Start Date</th>
                  <th scope='col'>End Date</th>
                  <th scope='col'>Hours</th>
                  <th scope='col'>Progress</th>
                  <th scope='col'>Actions</th>
                </tr>}
              </thead>

              <tbody>

                <>
                  {todos.length > 0 &&
                    <>
                      {todos.map((todo, index) => (
                        <tr key={index}>
                          <td>{todo.taskTitle}</td>
                          <td>{dateFormat(todo.startDate, "mmm d, yyyy")}</td>
                          <td>{dateFormat(todo.endDate, "mmm d, yyyy")}</td>
                          <td>{todo.hourBudgeted}</td>
                          <td className='flex'>
                            <div className='status'>60% complete</div>
                            <progress id="task-status" value="60" max="100"> </progress>
                          </td>
                          <td>
                            <div className="morebox">
                              <img src={MoreIconVertical} alt="more icon" onClick={() => setShowMore(!showMore)} />
                              {showMore && <div className={`optionbox ${showMore ? 'active' : ''}`}>
                                <div className='action'>Complete</div>
                                <div className='action'>Edit</div>
                                <div className='action'>Delete</div>
                              </div>}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>

                  }

                  {todos.length === 0 && (
                    <div className='empty'>
                      <p className='title'>No Task added</p>
                      <span className='subtitle'>Task will show here when you have one.</span>
                    </div>
                  )}
                </>

              </tbody>



            </table>
          </div>


        </main>
        <aside className='aside'>
          <div className="headercon">
            <h2 className="heading">Today's Scheudle</h2>
            <div className="iconbox">
              <img src={DashboardLite} alt="" />
              <img src={Calendar} alt="" />
            </div>
          </div>

          <div className="headercon mtop">
            <h2 className="heading">New Task</h2>
            <img src={MoreIconHorizontal} alt="" />
          </div>

          {/* Form section */}

          {/* <NewTaskForm /> */}

          <div className=''>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='form-label'>Task Title</label>
                <input
                  type="text"
                  name="taskTitle"
                  id="task-title"
                  placeholder='Create new'
                  className='form-control'
                  onChange={handleChange}
                  value={values.taskTitle}
                />
                {errors.taskTitle && touched.taskTitle ? (<div className='error'>{errors.taskTitle}</div>) : null}

              </div>

              <div className="divider"></div>

              <div className="form-group">
                <label className='form-label'>Time To Complete</label>
                <input
                  type="date"
                  name="startDate"
                  id="start_date"
                  placeholder='Start date'
                  className='form-control'
                  onChange={handleChange}
                  value={values.startDate}
                />
                {errors.startDate && touched.startDate ? (<div className='error'>{errors.startDate}</div>) : null}

                <input
                  type="date"
                  name="endDate"
                  id="end_date"
                  placeholder='End date'
                  className='form-control'
                  onChange={handleChange}
                  value={values.endDate}
                />
                {errors.endDate && touched.endDate ? (<div className='error'>{errors.endDate}</div>) : null}
              </div>

              <div className="divider"></div>

              <div className="form-group">
                <label className='form-label'>Hours Budgeted</label>
                <input
                  type="text"
                  name="hourBudgeted"
                  id="hours"
                  placeholder='Enter Hours'
                  className='form-control'
                  onChange={handleChange}
                  value={values.hourBudgeted}
                />
                {errors.hourBudgeted && touched.hourBudgeted ? (<div className='error'>{errors.hourBudgeted}</div>) : null}
              </div>

              <div className="form-group savebtn">
                <button type='submit' className='btn btn-primary' >Save</button>
              </div>

              <div className="divider"></div>
            </form>
          </div>


          {/* Messages section */}
          <div className="headercon">
            <h2 className="heading mbottom">Messages</h2>
          </div>


          <div className="messagebox">
            <div className="user-photo">
              <img src={Webber} alt="" />
            </div>
            <div className="message">
              <div className="message__sender">Chris Webber</div>
              <div className="message__body">Hi Michael! How are You?</div>
            </div>
          </div>

          <div className="messagebox">
            <div className="user-photo">
              <img src={Kelvin} alt="" />
            </div>
            <div className="message">
              <div className="message__sender">Kelvin Durant </div>
              <div className="message__body">Do you need that design?</div>
            </div>
          </div>

        </aside>
      </div>
    </MainLayout>
  )
}

export default Dashboard