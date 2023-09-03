import Image from 'next/image';
import TodoList from '../AllTask/TodoList';
import Progress from '../AllTask/Progress';
import Done from '../AllTask/Done';
import Revised from '../AllTask/Revised';
import Completed from '../AllTask/Completed';

const TaskManagement = () => {
  return (
    <div className="overflow-x-auto px-1 py-8 text-white ">
      <div className="flex space-x-5">
        <div className="flex w-[300px] flex-col space-y-3 ">
          <div className="d_Flex px-8">
            <h4 className="font-semibold">To-Do List (24)</h4>
            <button>
              <Image
                src="/images/svg/btnAdd.svg"
                alt="icon"
                width={49}
                height={49}
              />
            </button>
          </div>
          <TodoList />
        </div>
        <div className="flex w-[300px] flex-col space-y-5 ">
          <div className="d_Flex  px-8">
            <h4 className="font-semibold">In Progress (2)</h4>
            <button>
              <Image
                src="/images/svg/btnAdd (1).svg"
                alt="icon"
                width={40}
                height={40}
              />
            </button>
          </div>
          <Progress />
        </div>
        <div className="flex w-[300px] flex-col space-y-5 ">
          <div className="d_Flex  px-8">
            <h4 className="font-semibold">Done (3)</h4>
            <button>
              <Image
                src="/images/svg/btnAdd (1).svg"
                alt="icon"
                width={40}
                height={40}
              />
            </button>
          </div>
          <Done />
        </div>
        <div className="flex w-[300px] flex-col space-y-5 ">
          <div className="d_Flex  px-8">
            <h4 className="font-semibold">Revised (0)</h4>
            <button>
              <Image
                src="/images/svg/btnAdd (1).svg"
                alt="icon"
                width={40}
                height={40}
              />
            </button>
          </div>
          <Revised />
        </div>
        <div className="flex w-[300px] flex-col space-y-5 ">
          <div className="d_Flex  px-8">
            <h4 className="font-semibold">Completed (2)</h4>
            <button>
              <Image
                src="/images/svg/btnAdd (1).svg"
                alt="icon"
                width={40}
                height={40}
              />
            </button>
          </div>
          <Completed />
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
