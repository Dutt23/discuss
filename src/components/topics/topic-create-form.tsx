'use client';
import { useActionState } from "react";
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover"
import { createTopic } from "@/actions"
import FormButton from "../common/form-button";

export default function TopicCreateForm() {

  const [formState, action, isPending] = useActionState(createTopic, {
    errors: {}
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a topic</h3>
            <Input 
              name= "name" 
              label="name" 
              labelPlacement="outside" 
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(',')}
            />
            <Textarea 
              name="description"
              label="description" 
              labelPlacement="outside" 
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(',')}
            />


            {formState.errors._form ?
            <div className="rounded p-2 bg-red-200 border border-red-400">
              {formState.errors._form?.join(',')}
            </div>
            :
            null
            }

            <FormButton isLoading={isPending}>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}