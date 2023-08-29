import { NextResponse } from 'next/server';


export async function GET(request: Request, { params }: { params: { id: string } }) {
  console.log(request);
  console.log(params.id);
  return NextResponse.json({id: params.id});
}

