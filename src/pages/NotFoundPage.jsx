import { useLocation, useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StatusBlock
      title="Такой страницы нет"
      text={`Путь "${location.pathname}" не совпал ни с одним маршрутом.`}
      buttonText="Вернуться на главную"
      onClick={() => navigate('/')}
    />
  );
}