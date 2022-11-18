import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import styles from "./Dialog.module.css";
import { CloseIcon } from "./Icons";

type DialogPrimitiveContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & { showCloseButton?: boolean };

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogPrimitiveContentProps
>(({ children, showCloseButton, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.overlay} />
    <DialogPrimitive.Content
      {...props}
      className={styles.content}
      ref={forwardedRef}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close className={styles.close}>
          <CloseIcon size={24} />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "Dialog";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
export const DialogClose = DialogPrimitive.Close;
