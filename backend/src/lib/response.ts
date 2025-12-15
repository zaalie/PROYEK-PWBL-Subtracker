import { NextResponse } from "next/server"

export function ok(data: unknown) {
  return NextResponse.json({ success: true, data }, { status: 200 })
}

export function created(data: unknown) {
  return NextResponse.json({ success: true, data }, { status: 201 })
}

export function accepted(data: unknown) {
  return NextResponse.json({ success: true, data }, { status: 202 })
}

export function badRequest(message: string) {
  return NextResponse.json(
    { success: false, message },
    { status: 400 }
  )
}

export function notFound(message = "Data not found") {
  return NextResponse.json(
    { success: false, message },
    { status: 404 }
  )
}

export function serverError(message = "Internal server error") {
  return NextResponse.json(
    { success: false, message },
    { status: 500 }
  )
}
