import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

function NewTaskForm() {

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
    )
}

export default NewTaskForm