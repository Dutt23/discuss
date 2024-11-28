'use client'
import { useActionState } from "react"
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover"

import { createPost } from '@/actions';
import FormButton from "../common/form-button";

export default function PostCreateForm() {

  const [formState, action, isPending]  = useActionState(createPost, { errors : {}})
  
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
             isInvalid={!!formState.errors.title}
             errorMessage={formState.errors.title?.join(',')}
             name="title"
             label="Title"
             labelPlacement="outside"
             placeholder="Title"
            />
            <Textarea
             errorMessage={formState.errors.content?.join(',')}
             isInvalid={!!formState.errors.content}
             name="content"
             label="Content"
             labelPlacement="outside"
             placeholder="Content"
            />
            {formState.errors._form ? 
              <div className="rounded p-2 bg-red-200 border border-red-400">
              {formState.errors._form.join(', ')}
              </div>: null}
            <FormButton isLoading={isPending}>
              Create Post
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}