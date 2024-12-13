import React from 'react';
import QrCodeScanner from '@/widgets/camera/ui/QrCodeScanner/QrCodeScanner';
import FlashlightField from '@/widgets/camera/ui/FlashlightField/FlashlightField';
import useFlashlight from '@/shared/hooks/useFlashlight';
import ModalAction from '@/shared/ModalAction/ModalAction';
import useModal from '@/shared/hooks/useModal';
import { useLocalSearchParams } from 'expo-router';

const QrScannerServicePage = () => {
	const { title } = useLocalSearchParams();

	const { isOnFlashlight, setIsOnFlashlight } = useFlashlight();
	const { showModal, setShowModal } = useModal();
	return (
		<>
			<QrCodeScanner isOnFlashlight={isOnFlashlight} setShowModal={setShowModal} />
			<FlashlightField
				isOnFlashlight={isOnFlashlight}
				handlePressFlashlight={() => setIsOnFlashlight(!isOnFlashlight)}
			/>
			<ModalAction
				text={`Пропустить посетителя на ${title}?`}
				state={showModal}
				action={() => setShowModal(false)}
			/>
		</>
	);
};

export default QrScannerServicePage;

// const styles = StyleSheet.create({
// 	container: {
// 		position: 'relative',
// 		flex: 1,
// 	},
// });
