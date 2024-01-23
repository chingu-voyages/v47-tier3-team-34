import Card from '@/components/uiComponents/dashboard/card/card'

const taskData = [
  {
    id: 1,
    title: 'Participate in sprint 1',
    subtitle: 'Review project ideas with teammates and design figma',
    status: 'complete',
  },
  {
    id: 2,
    title: 'Participate in sprint 2',
    subtitle: 'Complete schema design for Backend',
    status: 'complete',
  },
  {
    id: 3,
    title: 'Participate in sprint 3',
    subtitle: 'Complete dashboard design for Frontend',
    status: 'incomplete',
  },
  {
    id: 4,
    title: 'Participate in sprint 4',
    subtitle: 'Complete dashboard design for Frontend',
    status: 'incomplete',
  },
  {
    id: 5,
    title: 'Participate in sprint 5',
    subtitle: 'Complete dashboard design for Frontend',
    status: 'incomplete',
  },
  {
    id: 6,
    title: 'Participate in sprint 6',
    subtitle: 'Complete dashboard design for Frontend',
    status: 'incomplete',
  },
]

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 mt-5'>
      <div>
        <h1 className='text-3xl'>All Tasks</h1>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {taskData && taskData.map((task) => <Card task={task} key={task.id} />)}
      </div>
    </div>
  )
}

export default Dashboard
