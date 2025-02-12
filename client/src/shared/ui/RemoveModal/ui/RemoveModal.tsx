import { memo, useCallback } from 'react';

import cls from './RemoveModal.module.css';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';

interface Props {
  onDelete: () => Promise<void>;
  isOpen: boolean;
  onCloseModal: () => void;
}

const RemoveModal = memo((props: Props) => {
  const { onCloseModal, isOpen, onDelete } = props;

  const deleteHandler = useCallback(async () => {
    await onDelete();
    alert('Удаление успешно');
  }, [onDelete]);

    const closingHandler = useCallback(() => {
      onCloseModal()
    }, []);

    return (
      <Modal
        isOpen={isOpen}
        onClose={onCloseModal}
        lazy
      >
        <div className={cls.removementModal}>
          <p className={cls.text}>Подтверждение удаления</p>
          <div className={cls.buttonsPanel}>
            <Button variant='red' onClick={deleteHandler}>Удалить</Button>
            <Button onClick={closingHandler}>Закрыть</Button>
          </div>
        </div>
      </Modal>
    );
});

export default RemoveModal;
