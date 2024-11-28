'use server';

import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z }  from 'zod';
import { auth } from '@/auth';
import { db } from "@/db";
import paths from "@/paths";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFromState {
  errors: {
    title? : string[],
    content?: string[];
    _form?: string[];
  }
}


export async function createPost(formState : CreatePostFromState, formData: FormData) : Promise<CreatePostFromState> {
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content')
  })

  if(!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  return {
    errors : {}
  }
}