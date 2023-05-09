import { Notification } from '@mantine/core';
import { IconCheck,} from '@tabler/icons-react';

export function Demo() {
  return (
    <>
      {/* <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<IconX size="1.1rem" />} color="red">
        Bummer! Notification without title
      </Notification> */}
            <Notification icon={<IconCheck size="1.1rem" />} color="teal"
                style={{ position: 'fixed', bottom: '0', right: '0', zIndex: 9999 }}
                title="Uploading data to the server"
            >
                Please wait until data is uploaded, you cannot close this notification yet
            </Notification>
        </>
    );
}